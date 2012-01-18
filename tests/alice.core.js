/* Copyright 2011-2012 Research In Motion Limited.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module("core");

test("randomize", function() {
    equal(alice._randomize(1000, "0%"), 1000, '1000 randomized by 0%');

    notEqual(alice._randomize(1000, "10%"), 1000, '1000 randomized by 10%');
    notEqual(alice._randomize(1000, "10%"), 1000, '1000 randomized by 10%');
    notEqual(alice._randomize(1000, "10%"), 1000, '1000 randomized by 10%');

    notEqual(alice._randomize(1000, "50%"), 1000, '1000 randomized by 50%');
    notEqual(alice._randomize(1000, "50%"), 1000, '1000 randomized by 50%');
    notEqual(alice._randomize(1000, "50%"), 1000, '1000 randomized by 50%');

    notEqual(alice._randomize(1000, "100%"), 1000, '1000 randomized by 100%');
    notEqual(alice._randomize(1000, "100%"), 1000, '1000 randomized by 100%');
    notEqual(alice._randomize(1000, "100%"), 1000, '1000 randomized by 100%');
})

test("duration", function() {
    var expected = {value: 1000, randomness: 0},
        expectedStr = JSON.stringify(expected);

    deepEqual(alice._duration(1000), expected, '1000 returns ' + expectedStr);

    deepEqual(alice._duration("1000"), expected, '"1000" returns ' + expectedStr);
    deepEqual(alice._duration("1000ms"), expected, '"1000ms" returns ' + expectedStr);
    deepEqual(alice._duration("1s"), expected, '"1s" returns ' + expectedStr);

    deepEqual(alice._duration({value: 1000}), expected, '{value: 1000} returns ' + expectedStr);

    deepEqual(alice._duration({value: "1000"}), expected, '{value: "1000"} returns ' + expectedStr);
    deepEqual(alice._duration({value: "1000ms"}), expected, '{value: "1000ms"} returns ' + expectedStr);
    deepEqual(alice._duration({value: "1s"}), expected, '{value: "1s"} returns ' + expectedStr);
})

test("coords", function() {
    deepEqual(alice._coords("top-left"), {x: "0%", y: "0%"}, '"top-left" returns {x: "0%", y: "0%"}');
    deepEqual(alice._coords("top-center"), {x: "50%", y: "0%"}, '"top-center" returns {x: "50%", y: "0%"}');
    deepEqual(alice._coords("top-right"), {x: "100%", y: "0%"}, '"top-right" returns {x: "100%", y: "0%"}');
    deepEqual(alice._coords("middle-left"), {x: "0%", y: "50%"}, '"middle-left" returns {x: "0%", y: "50%"}');
    deepEqual(alice._coords("middle-center"), {x: "50%", y: "50%"}, '"middle-center" returns {x: "50%", y: "50%"}');
    deepEqual(alice._coords("middle-right"), {x: "100%", y: "50%"}, '"" returns {x: "100%", y: "50%"}');
    deepEqual(alice._coords("bottom-left"), {x: "0%", y: "100%"}, '"bottom-left" returns {x: "0%", y: "100%"}');
    deepEqual(alice._coords("bottom-center"), {x: "50%", y: "100%"}, '"bottom-center" returns {x: "50%", y: "100%"}');
    deepEqual(alice._coords("bottom-right"), {x: "100%", y: "100%"}, '"bottom-right" returns {x: "100%", y: "100%"}');

    deepEqual(alice._coords("top"), {x: "50%", y: "0%"}, '"top" returns {x: "50%", y: "0%"}');
    deepEqual(alice._coords("left"), {x: "0%", y: "50%"}, '"left" returns {x: "0%", y: "50%"}');
    deepEqual(alice._coords("center"), {x: "50%", y: "50%"}, '"center" returns {x: "50%", y: "50%"}');
    deepEqual(alice._coords("right"), {x: "100%", y: "50%"}, '"right" returns {x: "100%", y: "50%"}');
    deepEqual(alice._coords("bottom"), {x: "50%", y: "100%"}, '"bottom" returns {x: "50%", y: "100%"}');
})
