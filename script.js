const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

const data = {
  run: ["01-23", "01-24", "01-25", "01-26", "01-27", "01-28"],
  water: ["01-24"],
  food: ["01-25"],
}

nlwSetup.setData(data)
nlwSetup.load()
