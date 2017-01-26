class Form {
  constructor() {
    this.$canvas = $('div#canvas')
    this.$canvasItems = $('.canvas-item')
    this.$flexDirection = $('input[name=flex-direction]')
    this.$flexWrap = $('input[name=flex-wrap]')
    this.$justifyContent = $('input[name=justify-content]')
    this.$alignItems = $('input[name=align-items]')
    this.$slider = $('input#slider')
  }

  updateState(){
    this.updateFlexDirection()
    this.updateFlexWrap()
    this.updateJustifyContent()
    this.updateAlignItems()
    this.sliderValue()
  }

  updateFlexDirection(){
    this.$flexDirection.change((event) => {
      let $cssAttribute = $(event.target).val()
      this.$canvas.css("flex-direction", `${$cssAttribute}`)
    })
  }

  updateFlexWrap(){
    this.$flexWrap.change((event) => {
      let $cssAttribute = $(event.target).val()
      this.$canvas.css("flex-wrap", `${$cssAttribute}`)
    })
  }

  updateJustifyContent(){
    this.$justifyContent.change((event) => {
      let $cssAttribute = $(event.target).val()
      this.$canvas.css("justify-content", `${$cssAttribute}`)
    })
  }

  updateAlignItems(){
    this.$alignItems.change((event) => {
      let $cssAttribute = $(event.target).val()
      this.$canvas.css("align-items", `${$cssAttribute}`)
    })
  }

  sliderValue(){
    this.$slider.change((event) => {
      let $number = $(event.target).val()
      $('span#range').text(`${$number}%`)
      this.$canvasItems.css("padding", `${$number}%`)
    })
  }



}
