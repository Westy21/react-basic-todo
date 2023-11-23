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
        
        stage('Deploy') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'Docker_ID') {
                        // Docker push steps
                        app.push("${env.BUILD_NUMBER}")
                        app.push("latest")
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

