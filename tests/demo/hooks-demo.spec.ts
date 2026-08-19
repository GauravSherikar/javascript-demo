import{test, expect} from '@playwright/test';

test.beforeAll("Beforeall hook", async () => {
    console.log(">>>Beforeall: file scope ......");//shold run just once per worker

});

test.beforeEach("BeforeEach hook", async () => {
    console.log(">>>BeforeEach: file scope ......");//should run before each test
});

test.describe("Test suite 1", () => {
    //beforeAll
    test.beforeAll("Beforeall hook", async () => {
        console.log(">>>Beforeall: suite scope ......");//shold run just once per worker

    })
    //beforeEach
    test.beforeEach("BeforeEach hook", async () => {
        console.log(">>>BeforeEach: suite scope ......");//should run before each test  
    })

    test("test one", async ({page}) => {
        console.log(">>>Test one: suite scope ......");
        await page.goto("https://www.google.com");
    });

    test("test two",({page}) => {
        console.log(">>>Running Test ......");
        
    });

});