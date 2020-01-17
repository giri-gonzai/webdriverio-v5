describe("HTTP Test with Chakram", () => {
    it("Testing for HTTP Successful", () => {
        var response = chakram.get("http://httpbin.org/get?test=chakram");
        expect(response).to.have.status(200);
        expect(response).to.have.header("content-type", "application/json");
        expect(response).not.to.be.encoded.with.gzip;
        expect(response).to.comprise.of.json({
            args: { test: "chakram" }
        });
        return chakram.wait();
    });
});