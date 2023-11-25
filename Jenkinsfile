pipeline {
    environment {
        registry = 'https://index.docker.io/v1/'
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
                    docker.withRegistry("${registry}", "${registryCredential}") {
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
