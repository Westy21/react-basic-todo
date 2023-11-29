pipeline {
  agent { label 'linux' }
  options {
    buildDiscarder(logRotator(numToKeepStr: '5'))
  }
  environment {
    DOCKERHUB_CREDENTIALS = credentials('Docker_ID')
  }
  stages {
    stage('Build') {
      steps {
        sh 'docker build -t westy22/react-todo:latest .'
      }
    }
    stage('Login') {
      steps {
        sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
      }
    }
    stage('Push') {
      steps {
        sh 'docker push westy22/react-todo:latest'
      }
    }
  }
  post {
    always {
      sh 'docker logout'
    }
  }
}
