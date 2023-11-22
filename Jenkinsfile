pipeline {
    agent any

    environment {
        // Define any environment variables needed for your pipeline
        NODE_VERSION = '18' // Adjust as needed
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from your version control system
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install Node.js and project dependencies
                script {
                    def npmCommand = "npm"
                    def nodeHome = tool 'NodeJS'
                    if (nodeHome) {
                        npmCommand = "${nodeHome}/bin/npm"
                    }

                    sh "${npmCommand} install"
                }
            }
        }

        stage('Build') {
            steps {
                // Build the React app
                script {
                    def npmCommand = "npm"
                    def nodeHome = tool 'NodeJS'
                    if (nodeHome) {
                        npmCommand = "${nodeHome}/bin/npm"
                    }

                    sh "${npmCommand} run build"
                }
            }
        }

        // stage('Deploy') {
        //     steps {
        //         // Deploy the React app (adjust as needed)
        //         sh 'rsync -avz build/ user@your-server:/path/to/deployment'
        //     }
        // }
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
