//Require the dev-dependencies
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
let should = chai.should();

chai.use(chaiHttp);

//Parent block
describe("plus-minus", () => {
    /*
     * Test the /GET route
     */
    describe("/POST add", () => {
        it("it should POST 2 numbers and return the added number", (done) => {
            let params = {
                number1: "1",
                number2: "2",
            };

            chai.request(server)
                .post("/plus-minus/add")
                .set("content-type", "application/x-www-form-urlencoded")
                .send(params)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    res.body.should.have.property("answer").eql(3);
                    done();
                });
        });

        it("it should POST 2 numbers and return the added number, negative number used", (done) => {
            let params = {
                number1: "-100",
                number2: "2",
            };

            chai.request(server)
                .post("/plus-minus/add")
                .set("content-type", "application/x-www-form-urlencoded")
                .send(params)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    res.body.should.have.property("answer").eql(-98);
                    done();
                });
        });

        it("it should POST 2 numbers and return the added number, number1 missing", (done) => {
            let params = {
                number2: "2",
            };

            chai.request(server)
                .post("/plus-minus/add")
                .set("content-type", "application/x-www-form-urlencoded")
                .send(params)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a("object");
                    res.body.should.have
                        .property("message")
                        .eql("Both numbers are required");
                    done();
                });
        });

        it("it should POST 2 numbers and return the added number, number2 missing", (done) => {
            let params = {
                number1: "2",
            };

            chai.request(server)
                .post("/plus-minus/add")
                .set("content-type", "application/x-www-form-urlencoded")
                .send(params)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a("object");
                    res.body.should.have
                        .property("message")
                        .eql("Both numbers are required");
                    done();
                });
        });

        it("it should POST 2 numbers and return the added number, both number missing", (done) => {
            let params = {};

            chai.request(server)
                .post("/plus-minus/add")
                .set("content-type", "application/x-www-form-urlencoded")
                .send(params)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a("object");
                    res.body.should.have
                        .property("message")
                        .eql("Both numbers are required");
                    done();
                });
        });

        it("it should POST 2 numbers and return the added number, number1 not a number", (done) => {
            let params = {
                number1: "12adfasdf",
                number2: "2",
            };

            chai.request(server)
                .post("/plus-minus/add")
                .set("content-type", "application/x-www-form-urlencoded")
                .send(params)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a("object");
                    res.body.should.have
                        .property("message")
                        .eql("number1 is not a number");
                    done();
                });
        });

        it("it should POST 2 numbers and return the added number, number2 not a number", (done) => {
            let params = {
                number1: "123123",
                number2: "2adf32g",
            };

            chai.request(server)
                .post("/plus-minus/add")
                .set("content-type", "application/x-www-form-urlencoded")
                .send(params)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a("object");
                    res.body.should.have
                        .property("message")
                        .eql("number2 is not a number");
                    done();
                });
        });
    });
});
