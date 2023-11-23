pipeline {
    environment {
        registry = "westy22/westy-docker-hub"
        registryCredential = 'dockerhub_id'
        dockerImage = ''
    }
    
    agent any
    
    stages {
        stage('Building our image') {
            steps {
                script {
                    echo "Current directory: ${pwd()}"
                    dockerImage = docker.build("-t ${registry}:${BUILD_NUMBER} .")
                }
            }
        }
        
        stage('Deploy our image') {
            steps {
                script {
                    docker.withRegistry('', registryCredential) {
                        dockerImage.push()
                    }
                }
            }
        }
        
        stage('Cleaning up') {
            steps {
                sh "docker rmi ${registry}:${BUILD_NUMBER}"
            }
        }
    }
}

