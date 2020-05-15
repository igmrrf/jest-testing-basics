const functions = require("./functions");
// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// // beforeEach(() => initDatabase());
// // afterEach(() => closeDatabase());

// const initDatabase = () => {
// 	console.log("Database Initialized");
// };
// const closeDatabase = () => {
// 	console.log("Database Closed..");
// };

const nameCheck = () => console.log("Checking Name ....");

describe("Checking Names", () => {
	beforeEach(() => nameCheck());

	test("User is jeff", () => {
		const user = "jeff";
		expect(user).toBe("jeff");
	});

	test("User is Karen", () => {
		const user = "Karen";
		expect(user).toBe("Karen");
	});
});

test("Adds 2 + 2 to equal 4", () => {
	expect(functions.add(2, 2)).toBe(4);
});

test("Adds 2 + 2 to Not equal 4", () => {
	expect(functions.add(2, 2)).not.toBe(5);
});

//CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of undefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

test("should be null", () => {
	expect(functions.isNull()).toBeNull();
});

test("should be falsy", () => {
	expect(functions.checkValue(false)).toBeFalsy();
});

test("User should be Lazy Dev object", () => {
	expect(functions.createUser()).toEqual({
		firstName: "Lazy",
		lastName: "Dev",
	});
});

//less than & greater than
test("should be under 1600", () => {
	const load1 = 800;
	const load2 = 700;
	expect(load1 + load2).toBeLessThan(1600);
});

test("There is no I or i in team", () => {
	expect("team").not.toMatch(/I/i);
});

//Arrays
test("Admin should be in usernames", () => {
	const usernames = ["john", "karen", "admin"];
	expect(usernames).toContain("admin");
});

//promise
test("User fetched name should be Leanne Graham", () => {
	expect.assertions(1);
	return functions.fetchUser().then((data) => {
		expect(data.name).toEqual("Leanne Graham");
	});
});

//async await
test("User fetched name should be Leanne Graham", async () => {
	expect.assertions(1);
	const data = await functions.fetchUser();
	expect(data.name).toEqual("Leanne Graham");
});
