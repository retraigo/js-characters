import { assertEquals } from "https://deno.land/std@0.177.0/testing/asserts.ts"

Deno.test({
    name: "Special: [",
    fn() {
        assertEquals("[", ([]+{})[+[]])
    }
})

Deno.test({
    name: "Special: ]",
    fn() {
        assertEquals("]", ([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]])
    }
})

Deno.test({
    name: "Number: 0",
    fn() {
        assertEquals("0", +[]+[])
    }
})


Deno.test({
    name: "Number: 1",
    fn() {
        assertEquals("1", +!+[]+[])
    }
})


Deno.test({
    name: "Alphabet: a",
    fn() {
        assertEquals("a", (+{}+[])[+!+[]])
        assertEquals("a", (![]+[])[+!+[]])
    }
})

Deno.test({
    name: "Alphabet: b",
    fn() {
        assertEquals("b", ([]+{})[+!+[]+!+[]])
    }
})

Deno.test({
    name: "Alphabet: c",
    fn() {
        assertEquals("c", ([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]])
    }
})

Deno.test({
    name: "Alphabet: d",
    fn() {
        assertEquals("d", (([]+[])[+[]]+[])[+!+[]+!+[]])
    }
})

Deno.test({
    name: "Alphabet: e",
    fn() {
        assertEquals("e", (([]+[])[+[]]+[])[+!+[]+!+[]+!+[]])
        assertEquals("e", ([]+{})[+!+[]+!+[]+!+[]+!+[]])
        assertEquals("e", (![]+[])[+!+[]+!+[]+!+[]+!+[]])
        assertEquals("e", (!+[]+[])[+!+[]+!+[]+!+[]])
    }
})

Deno.test({
    name: "Alphabet: f",
    fn() {
        assertEquals("f", (![]+[])[+[]])
        assertEquals("f", (([]+[])[+[]]+[])[+!+[]+!+[]+!+[]+!+[]])
    }
})

Deno.test({
    name: "Alphabet: i",
    fn() {
        assertEquals("i", (([]+[])[+[]]+[])[+!+[]+!+[]+!+[]+!+[]+!+[]])
    }
})

Deno.test({
    name: "Alphabet: j",
    fn() {
        assertEquals("j", ([]+{})[+!+[]+!+[]+!+[]])
    }
})

Deno.test({
    name: "Alphabet: l",
    fn() {
        assertEquals("l", (![]+[])[+!+[]+!+[]])
    }
})

Deno.test({
    name: "Alphabet: n",
    fn() {
        assertEquals("n", (([]+[])[+[]]+[])[+!+[]])
    }
})

Deno.test({
    name: "Alphabet: N",
    fn() {
        assertEquals("N", (+{}+[])[+[]])
    }
})

Deno.test({
    name: "Alphabet: o",
    fn() {
        assertEquals("o", ([]+{})[+!+[]])
    }
})

Deno.test({
    name: "Alphabet: O",
    fn() {
        assertEquals("O", ([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]])
    }
})

Deno.test({
    name: "Alphabet: r",
    fn() {
        assertEquals("r", (!+[]+[])[+!+[]])
    }
})

Deno.test({
    name: "Alphabet: s",
    fn() {
        assertEquals("s", (![]+[])[+!+[]+!+[]+!+[]])
    }
})

Deno.test({
    name: "Alphabet: t",
    fn() {
        assertEquals("t", (!+[]+[])[+[]])
    }
})

Deno.test({
    name: "Alphabet: u",
    fn() {
        assertEquals("u", (!+[]+[])[+!+[]+!+[]])
    }
})