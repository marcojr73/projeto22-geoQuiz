import { faker } from "@faker-js/faker"

function createAuthData() {
	return {
		name: faker.name.firstName(),
        email: faker.internet.email(),
        password: faker.finance.bitcoinAddress(),
    }
}

function createLevel(){
    const quiz = ["flags", "capitals", "territories"]
    const levels = ["easy, medium", "hard"]
    return `#${quiz[Math.floor(Math.random() * 2)]}-${levels[Math.floor(Math.random() * 2)]}`
}

export default {
    createAuthData,
    createLevel
}