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

function addRuleToChild(name, index) {
    let flexChild = document.getElementsByClassName('flex-child')[index - 1];
    flexChild.className = "";
    flexChild.className = `flex-child border ${name}`;
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
// ---------------------------------------------------------------------------------------------------------------------
document.getElementById("order").onclick = function (){
    delChildren()
    document.getElementById("text-container").innerHTML = `
        <h2>
            Order
        </h2>
        <p>
            Define the order of the current element in the layout. Default order for all elements is 0.
        </p>
    `;
    addRuleToParent('flex-start');
    document.getElementById("button-container").innerHTML = `
        <button onclick="addRuleToChild('order-2', 1);">Order 1</button>
        <button onclick="addRuleToChild('order-4', 1);">Order 3</button>
        <button onclick="addRuleToChild('order-5', 1);">Order 4</button>
    `;
    addChildren(7);
    let flexChildren = Array.from(document.getElementsByClassName("flex-child"));
    for(let i = 0; i <= flexChildren.length - 1; i++){
        flexChildren[i].className = "";
        flexChildren[i].className = "flex-child order-" + (i + 1);
    }
}
document.getElementById("flex-grow").onclick = function (){
    delChildren()
    document.getElementById("text-container").innerHTML = `
        <h2>
            Flex-grow
        </h2>
        <p>
            Define how the current item grows, meaning how much space it takes up. If all items have the same grow
            amount, the space will be distributed equally among them. If only onw has grow, it takes up the remaining
            available space. Opposite of flex-shrink.
        </p>
    `;
    addRuleToParent('flex-start');
    document.getElementById("button-container").innerHTML = `
        <button onclick="addRuleToChild('grow-3', 1);">Grow first by 3</button>
        <button onclick="addRuleToChild('grow-1', 2);">Grow second by 1</button>
        <button onclick="addRuleToChild('grow-2', 3);">Grow third by 2</button>
    `;
    addChildren(3);
}
document.getElementById("flex-shrink").onclick = function (){
    delChildren()
    document.getElementById("text-container").innerHTML = `
        <h2>
            Flex-shrink
        </h2>
        <p>
            Define how the current item shrinks, meaning how much space it takes up. If all items have the same shrink
            amount, the space will be distributed equally among them. If only onw has shrink, it takes up the remaining
            available space. Opposite of flex-grow.
        </p>
    `;
    addRuleToParent('flex-start');
    document.getElementById("button-container").innerHTML = `
        <button onclick="addRuleToChild('shrink-3', 1);">Shrink first by 3</button>
        <button onclick="addRuleToChild('shrink-1', 2);">Shrink second by 1</button>
        <button onclick="addRuleToChild('shrink-2', 3);">Shrink third by 2</button>
    `;
    addChildren(3);
}
document.getElementById("flex-basis").onclick = function (){
    delChildren()
    document.getElementById("text-container").innerHTML = `
        <h2>
            Flex-basis
        </h2>
        <p>
            Define the default size of a flex item before the remainder of space is distributed. Default is auto.
        </p>
    `;
    addRuleToParent('flex-start');
    document.getElementById("button-container").innerHTML = `
        <button onclick="addRuleToChild('basis-20', 1);">Basis first by 20%</button>
        <button onclick="addRuleToChild('basis-0', 2);">Basis second by 0</button>
        <button onclick="addRuleToChild('basis-auto', 3);">Basis third by auto</button>
    `;
    addChildren(3);
}
document.getElementById("flex").onclick = function (){
    delChildren()
    document.getElementById("text-container").innerHTML = `
        <h2>
            Flex
        </h2>
        <p>
            This is a shorthand function for flex-grow, flex-shrink and flex-basis. The first parameter is flex-grow and
            the second and third are for flex-shrink and flex-basis respectively and are optional. Default is 0 1 auto.
        </p>
    `;
    addRuleToParent('flex-start');
    document.getElementById("button-container").innerHTML = `
        <button onclick="addRuleToChild('flex-2-1-30', 1);">Flex first by 2 1 30%</button>
        <button onclick="addRuleToChild('flex-4', 2);">Flex second by 4</button>
        <button onclick="addRuleToChild('flex-3-3-5rem', 3);">Flex third by 3 3 5rem</button>
    `;
    addChildren(3);
}
document.getElementById("align-self").onclick = function (){
    delChildren()
    document.getElementById("text-container").innerHTML = `
        <h2>
            Align-self
        </h2>
        <p>
            Defines an aligning rule to certain item. See align-items explanation.
        </p>
    `;
    addRuleToParent('flex-start');
    document.getElementById("button-container").innerHTML = `
        <button onclick="addRuleToChild('align-self-center', 1);">Align first center</button>
        <button onclick="addRuleToChild('align-self-end', 3);">Align third end</button>
        <button onclick="addRuleToChild('align-self-start', 5);">Align fifth start</button>
    `;
    addChildren(7);
}