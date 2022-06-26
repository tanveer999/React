// Map

const nums = [1,2,3,4,5]
console.log(nums)

const output = nums.map((item) => item * item)
console.log(output)

const names = ["alice", "bob", "charlie", "danielle"]
console.log(names)

const upperCaseNames = names.map((item) => item.charAt(0).toUpperCase() + item.slice(1))
console.log(upperCaseNames)

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
console.log(pokemon)
// const pTaggedPokemon = pokemon.map((item) => "<p>" + item + "</p>")
const pTaggedPokemon = pokemon.map((item) => {
    return `<p>${item}</p>`
})
console.log(pTaggedPokemon)