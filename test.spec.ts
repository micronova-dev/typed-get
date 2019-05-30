import get from "./index";
import { expect } from "chai";
import "mocha";

interface U {
  a?: string;
  b: number;
}

interface X {
  p: string;
  u: U | null;
  u0: U;
  uu: U[];
}

const x: X = {
  p: "P",
  u: null,
  u0: {
    b: 6
  },
  uu: [
    {
      b: 3
    },
    {
      a: "A",
      b: 4
    }
  ]
};

describe("typed get", () => {
  it("should return nonnullable property as-is", () => {
    const x_p: string = get(x, "p");
    expect(x_p).to.equal("P");
  });

  it("should return undefined if all properties are nullable", () => {
    const x_u_a: string | undefined = get(x, "u", "a");
    expect(x_u_a).to.equal(undefined);
  });

  it("should return undefined if all porperties but the last are nullable", () => {
    const x_u_b: number | undefined = get(x, "u", "b");
    expect(x_u_b).to.equal(undefined);
  });

  it("should return undefined if last property is nullable", () => {
    const x_u0_a: string | undefined = get(x, "u0", "a");
    expect(x_u0_a).to.equal(undefined);
  });

  it("should not have undefined type if all properties are not nullable", () => {
    const x_u0_b: number = get(x, "u0", "b");
    expect(x_u0_b).to.equal(6);
  });

  it("should return value but have nullable type when index is involved", () => {
    const x_uu_1_a: string | undefined = get(x, "uu", 1, "a");
    expect(x_uu_1_a).to.equal("A");
  });

  it("should return value but have nullable type when otherwise nonnullable but index is involved", () => {
    const x_uu_1_b: number | undefined = get(x, "uu", 1, "b");
    expect(x_uu_1_b).to.equal(4);
  });
});
