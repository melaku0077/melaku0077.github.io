// Melaku G.Denbel 
// Maharashi International University 
// WAP Assignment on Functional Programming

describe("MochChai on Functional Programming Test", () => {
    describe("Summation Test", () => {
        it("should return 7", () => {
          assert.equal(sum([1, 2, 4]), 7);
        });
      });

    describe("Multiplication Test", () => {
      it("should return 27", () => {
        assert.equal(multiply([1, 3, 9]), 27);
      });
    });
    describe("Reversing a String Test", () => {
      it('should return "lmth"', () => {
        assert.equal(reverse("html"), "lmth");
      });
    });
    describe("Filter Words Test", () => {
      it('should return ["Java","Script"] i.e words having length > 3', () => {
        assert.deepEqual(
          filterLongWords(["Java","Script", "ES6", "hr"], 3),
          ["Java","Script"]
        );
      });
    });
  });
  