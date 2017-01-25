class Form {
  constructor() {
    this.$canvas = $('div#canvas')
    this.$flexDirection = $('input[name=flex-direction]')
    this.$flexWrap = $('input[name=flex-wrap]')
    this.$justifyContent = $('input[name=justify-content]')
    this.$alignItems = $('input[name=align-items]')
  }

  // updateState(){
  //   debugger
  //   this.updateFlexDirection()
  //   this.updateFlexWrap()
  //   this.updateJustifyContent()
  //   this.updateAlignItems()
  // }

  updateState(){

    const props = [this.$flexDirection, this.$flexWrap, this.$justifyContent, this.$alignItems]

    props.forEach(property){
      property.change((event) => {
        let $cssAttribute = $(event.target).val()
        let $cssName = $(event.target).name
        this.$canvas.css(`${$cssName}, ${$cssAttribute}`)
      })
    }
  }

  // updateFlexWrap(){
  //   this.$flexWrap.change((event) => {
  //     let $cssAttribute = $(event.target).val()
  //     this.$canvas.css("flex-wrap", `${$cssAttribute}`)
  //   })
  // }
  //
  // updateJustifyContent(){
  //   this.$justifyContent.change((event) => {
  //     let $cssAttribute = $(event.target).val()
  //     this.$canvas.css("justify-content", `${$cssAttribute}`)
  //   })
  // }
  //
  // updateAlignItems(){
  //   this.$alignItems.change((event) => {
  //     let $cssAttribute = $(event.target).val()
  //     this.$canvas.css("align-items", `${$cssAttribute}`)
  //   })
  // }
}
