pipeline {
    environment {
        registry = 'https://index.docker.io/v1/'
        registryCredential = 'Docker_ID'
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
                    docker.withRegistry("${registry}", 'Docker_ID') {
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

