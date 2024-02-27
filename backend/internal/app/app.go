package app

import "fmt"

func PrintHello(name string) string {
	message := fmt.Sprintf("Hi, %v. Welcome", name)
	return message
}
