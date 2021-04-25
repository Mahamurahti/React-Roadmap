const flexParent = document.getElementsByClassName("flex-parent")[0];

/**
 * Deletes all rules from flexParent and then adds new ones
 * @param name {String} of the css rule to be added
 */
function addRuleToParent(name) {
    flexParent.className = "";
    flexParent.className = `flex-parent ${name}`;
}

/**
 * Deletes all rules from flexChildren and then adds new ones
 * @param name {String} of the css rule to be added
 */
function addRuleToChildren(name) {
    let flexChildren = Array.from(document.getElementsByClassName("flex-child"));
    for(let i = 0; i <= flexChildren.length - 1; i++){
        flexChildren[i].className = "";
        flexChildren[i].className = `flex-child ${name}`;
    }
}

/**
 * Resets the rules of all children
 */
function resetChildrenRules() {
    let flexChildren = Array.from(document.getElementsByClassName("flex-child"));
    for(let i = 0; i <= flexChildren.length - 1; i++){
        flexChildren[i].className = "";
        flexChildren[i].className = `flex-child`;
    }
}

/**
 * Adds children to flexParent
 * @param count {int} of children to be added
 */
function addChildren(count){
    for(let i = 1; i <= count; i++){
        flexParent.innerHTML += `
            <div class="flex-child">${flexParent.children.length + 1}</div>
        `;
    }
}

/**
 * Deletes all children from the flexParent
 */
function delChildren(){
    flexParent.innerHTML = "";
}

/**
 * Onclick function for "flex-direction" button.
 */
document.getElementById("flex-direction").onclick = function (){
    delChildren()
    document.getElementById("text-container").innerHTML = `
        <h2>
            Flex-direction
        </h2>
        <p>
            By default the direction of row is selected, which indicates the flex-items to go from left to right. 
            Row-reverse reverses this direction to right to left. Column is the same as row, but from top to 
            bottom and column-reverse is from bottom to top.
        </p>
    `;
    addRuleToParent('row');
    document.getElementById("button-container").innerHTML = `
        <button onclick="addRuleToParent('row')">Row</button>
        <button onclick="addRuleToParent('row-reverse')">Row-reverse</button>
        <button onclick="addRuleToParent('column')">Column</button>
        <button onclick="addRuleToParent('column-reverse')">Column-reverse</button>
    `;
    addChildren(8);
}

/**
 * Onclick function for "flex-wrap" button.
 */
document.getElementById("flex-wrap").onclick = function (){
    delChildren()
    document.getElementById("text-container").innerHTML = `
        <h2>
            Flex-wrap
        </h2>
        <p>
            By default, flex items will try to fit into one line with nowrap. This can be changed with the wrap rule, that
            will wrap the elements into the next row if needed. Wrap starts from top left and goes to right as long as there 
            is space, after which it switches to a lower row. Wrap-reverse is the same as wrap, but starts from bottom left
            and if a new row is needed, wraps to upper row.
        </p>
    `;
    addRuleToParent('nowrap');
    document.getElementById("button-container").innerHTML = `
        <button onclick="addRuleToParent('nowrap')">Nowrap</button>
        <button onclick="addRuleToParent('wrap')">Wrap</button>
        <button onclick="addRuleToParent('wrap-reverse')">Wrap-reverse</button>
    `;
    addChildren(14);
}

/**
 * Onclick function for "flex-flow" button.
 */
document.getElementById("flex-flow").onclick = function (){
    delChildren()
    document.getElementById("text-container").innerHTML = `
        <h2>
            Flex-flow
        </h2>
        <p>
            This is a shorthand function for flex-direction and flex-wrap. By default this is row wrap.
        </p>
    `;
    addRuleToParent('row-wrap');
    document.getElementById("button-container").innerHTML = `
        <button onclick="addRuleToParent('row-wrap')">Row wrap</button>
        <button onclick="addRuleToParent('column-wrap')">Column Wrap</button>
        <button onclick="addRuleToParent('row-reverse-nowrap')">Row-reverse nowrap</button>
        <button onclick="addRuleToParent('column-wrap-reverse')">Column wrap-reverse</button>
    `;
    addChildren(14);
}

/**
 * Onclick function for "justify-content" button.
 */
document.getElementById("justify-content").onclick = function (){
    delChildren()
    document.getElementById("text-container").innerHTML = `
        <h2>
            Justify-content
        </h2>
        <p>
            By default, flex-items will try to align themselves at the start of the main-axis and be packed together.
            This aligning can be changed to the end of the main-axis, in the center, or so that the flex-items are spaced
            between the end points of the axis, so that the items have equal space between them (kind of like a margin)
            or lastly so that they have an equal amount of space between them.
        </p>
    `;
    addRuleToParent('flex-start');
    document.getElementById("button-container").innerHTML = `
        <button onclick="addRuleToParent('flex-start-justify')">Flex-start</button>
        <button onclick="addRuleToParent('flex-end-justify')">Flex-end</button>
        <button onclick="addRuleToParent('center-justify')">Center</button>
        <button onclick="addRuleToParent('space-between-justify')">Space between</button>
        <button onclick="addRuleToParent('space-around-justify')">Space around</button>
        <button onclick="addRuleToParent('space-evenly-justify')">Space evenly</button>
    `;
    addChildren(4);
}

/**
 * Onclick function for "align-items" button.
 */
document.getElementById("align-items").onclick = function (){
    delChildren()
    document.getElementById("text-container").innerHTML = `
        <h2>
            Align-items
        </h2>
        <p>
            This rule is almost the same as justify-content, the main difference is that these rules apply not to the main-
            axis, but the axis that is in the center of the main-axis. Imagine a line in the middle of the main-axis and
            by default the items try to fit above the center line and for example if the rule is center, flex-items try
            to align themselves along the center line.
        </p>
    `;
    addRuleToParent('flex-start');
    document.getElementById("button-container").innerHTML = `
        <button onclick="addRuleToParent('flex-start-items'); resetChildrenRules()">Flex-start</button>
        <button onclick="addRuleToParent('flex-end-items'); resetChildrenRules()">Flex-end</button>
        <button onclick="addRuleToParent('center-items'); resetChildrenRules()">Center</button>
        <button onclick="addRuleToParent('stretch-items-parent'); addRuleToChildren('stretch-child')">Stretch</button>
        <button onclick="addRuleToParent('baseline-parent'); addRuleToChildren('baseline-child')">Baseline</button>
    `;
    addChildren(4);
}

/**
 * Onclick function for "align-content" button.
 */
document.getElementById("align-content").onclick = function (){
    delChildren()
    document.getElementById("text-container").innerHTML = `
        <h2>
            Align-content
        </h2>
        <p>
            This rule only works with elements, which have wrapping enabled i.e. wrap or wrap-reverse, since this rule
            affects how the aligning of the flex containers rows work. Similar to justify-content.
        </p>
    `;
    addRuleToParent('flex-start-content');
    document.getElementById("button-container").innerHTML = `
        <button onclick="addRuleToParent('flex-start-content'); resetChildrenRules()">Flex-start</button>
        <button onclick="addRuleToParent('flex-end-content'); resetChildrenRules()">Flex-end</button>
        <button onclick="addRuleToParent('center-content'); resetChildrenRules()">Center</button>
        <button onclick="addRuleToParent('stretch-content-parent'); addRuleToChildren('stretch-child')">Stretch</button>
        <button onclick="addRuleToParent('space-between-content'); resetChildrenRules()">Space between</button>
        <button onclick="addRuleToParent('space-around-content'); resetChildrenRules()">Space around</button>
        <button onclick="addRuleToParent('space-evenly-content'); resetChildrenRules()">Space evenly</button>
    `;
    addChildren(14);
}
// --------------------------
document.getElementById("order").onclick = function (){
    alert("Hello")
}
document.getElementById("flex-grow").onclick = function (){
    alert("Hello")
}
document.getElementById("flex-shrink").onclick = function (){
    alert("Hello")
}
document.getElementById("flex-basis").onclick = function (){
    alert("Hello")
}
document.getElementById("flex").onclick = function (){
    alert("Hello")
}
document.getElementById("align-self").onclick = function (){
    alert("Hello")
}