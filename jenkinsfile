pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // This stage checks out the code from your version control system
                checkout scm
            }
        }

        stage('Build') {
            steps {
                // This stage can include build commands, such as compiling code
                sh 'mvn clean install'
            }
        }

        stage('Test') {
            steps {
                // This stage can include test commands
                sh 'mvn test'
            }
        }

        stage('Deploy') {
            steps {
                // This stage can include deployment commands
                sh 'deploy-script.sh'
            }
        }
    }

    post {
        success {
            // This block runs if the pipeline is successful
            echo 'Build and deployment successful!'
        }

        failure {
            // This block runs if the pipeline fails
            echo 'Build or deployment failed!'
        }

        always {
            // This block runs regardless of success or failure
            echo 'Cleaning up...'
        }
    }
}
