let parent = document.querySelectorAll('div > ul > li > label > input');
let interest = document.querySelectorAll('div > ul > li');

for (let index = 0; index < interest.length; index++) {
    let children = interest[index].querySelectorAll('div > ul > li > ul > li > label > input');

    parent[index].addEventListener('change', () => {

        if (parent[index].checked == true) {
            for (let i = 0; i < children.length; i++) {
                children[i].checked = true;
            }
        }

        else if (parent[index].checked == false) {
            for (let i = 0; i < children.length; i++) {
                children[i].checked = false;
            }
        }
    })
}
