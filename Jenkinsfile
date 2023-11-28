pipeline {
    environment {
        registry = ''
        registryCredential = 'Docker_ID'
        name = 'react-todo-app'
        dockerImage = ''
    }

    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    // Your Docker build steps go here
                    docker.build("${name}:${BUILD_NUMBER}")
                }
            }
        }

        stage('Deploy Docker Image') {
            steps {
                script {
                    // Use Docker Hub credentials directly for authentication
                    withDockerRegistry([credentialsId: "${registryCredential}", url: "${registry}"]) {
                        // Docker push steps
                        docker.image("${name}:${BUILD_NUMBER}").push()
                    }
                }
            }
        }

        stage('Cleaning up') {
            steps {
                sh "docker rmi ${name}:${BUILD_NUMBER}"
            }
        }
    }
}
