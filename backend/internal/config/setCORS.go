package config

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func SetCORS(r *gin.Engine) {
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"http://localhost:3000"}

	r.Use(cors.New(config))
}
