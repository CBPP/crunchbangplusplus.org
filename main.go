package main

import "github.com/gopherjs/gopherjs/js"
import "honnef.co/go/js/dom"

func main() {
  d := dom.GetWindow().Document()
  elements := d.GetElementsByClassName("js-lightbox")
  for _, v := range elements {
    v.AddEventListener("click", true, lightboxImage)
  }
}

func lightboxImage(evt dom.Event) {
  evt.PreventDefault()
  d := dom.GetWindow().Document()
  
  mask := d.CreateElement("div")
  mask.SetAttribute("style", "transition: opacity 0.15s ease-in")
  mask.Class().SetString("fixed top-0 left-0 w-100 h-100 bg-black-90 flex items-center justify-center o-0 pointer")
  js.Global.Get("console").Call("log", mask)
  img := d.CreateElement("img")
  img.SetAttribute("src", evt.Target())
}