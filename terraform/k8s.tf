# Define Kubernetes namespace
resource "kubernetes_namespace" "devopswebproject" {
  metadata {
    name = "devopswebproject"
  }
}

# Define frontend deployment
resource "kubernetes_deployment" "frontend_deployment" {
  metadata {
    name      = "frontend-deployment"
    namespace = kubernetes_namespace.devopswebproject.metadata[0].name
    labels = {
      app = "frontend"
    }
  }

  spec {
    replicas = 1

    selector {
      match_labels = {
        app = "frontend"
      }
    }

    template {
      metadata {
        labels = {
          app = "frontend"
        }
      }

      spec {
        container {
          image = "auroobaparker/frontend-image:latest"
          name  = "frontend"
          port {
            container_port = 3000
          }
        }
      }
    }
  }
}

# Define frontend service
resource "kubernetes_service" "frontend_service" {
  metadata {
    name      = "frontend-service"
    namespace = kubernetes_namespace.devopswebproject.metadata[0].name
  }

  spec {
    selector = {
      app = "frontend"
    }

    port {
      port        = 80
      target_port = 3000
    }
  }
}

# Define backend deployment
resource "kubernetes_deployment" "backend_deployment" {
  metadata {
    name      = "backend-deployment"
    namespace = kubernetes_namespace.devopswebproject.metadata[0].name
    labels = {
      app = "backend"
    }
  }

  spec {
    replicas = 1

    selector {
      match_labels = {
        app = "backend"
      }
    }

    template {
      metadata {
        labels = {
          app = "backend"
        }
      }

      spec {
        container {
          image = "auroobaparker/backend-image:latest"
          name  = "backend"
          port {
            container_port = 5000
          }
        }
      }
    }
  }
}

# Define backend service
resource "kubernetes_service" "backend_service" {
  metadata {
    name      = "backend-service"
    namespace = kubernetes_namespace.devopswebproject.metadata[0].name
  }

  spec {
    selector = {
      app = "backend"
    }

    port {
      port        = 80
      target_port = 5000
    }
  }
}
