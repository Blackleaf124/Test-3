let eggHour = document.querySelector("form")
let colorBtn = document.querySelector("#color")
let placeBtn = document.querySelector("#place")
let ritualBtn = document.querySelector("#ritual")

eggHour.addEventListener("submit", (event) => {
	event.preventDefault()
    alert("That's kind of gross.")
})

colorBtn.addEventListener("click", () => {
    alert("My favorite color is forest green. Lime green is gross.")
})

placeBtn.addEventListener("click", () => {
    alert("My favorite place is the same place I keep the heads... 33.9937870627277, 36.22812207376876")
})

ritualBtn.addEventListener("click", () => {
    alert("“Void of clothing, this hybrid spawn were braying, bellowing, and writhing about a monstrous ring-shaped bonfire; in the centre of which, revealed by occasional rifts in the curtain of flame, stood a great granite monolith some eight feet in height; on top of which, incongruous with its diminutiveness, rested the noxious carven statuette. From a wide circle of ten scaffolds set up at regular intervals with the flame-girt monolith as a centre hung, head downward, the oddly marred bodies of the helpless squatters who had disappeared. It was inside this circle that the ring of worshippers jumped and roared, the general direction of the mass motion being from left to right in endless Bacchanal between the ring of bodies and the ring of fire.”")
})