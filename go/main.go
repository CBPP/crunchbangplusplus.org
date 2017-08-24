package main

import "github.com/gopherjs/gopherjs/js"

func main() {
  js.Global.Get("console").Call("log", "Hello from GLOANG world")
  js.Global.Get("console").Call("log", "This is kinda cool")
}