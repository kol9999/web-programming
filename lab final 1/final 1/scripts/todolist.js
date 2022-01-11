function AddTask(event)
{
    try {
        let tex = document.getElementById("form").value;
        let element = CreateUnit(tex);
        document.getElementById("mylist").appendChild(element);
        DisThread(document.getElementById("mylist"));
    }
    catch(err)
    {
        alert(err);
    }
    document.getElementById("form").value = "";
    event.stopPropagation();
}

function RemoveTask(obj)
{
    obj.parentNode.remove();
    DisThread(document.getElementById("mylist"));
}

function DisThread(div)
{
    let lines = [];
    let child = null;
    let ps = div.getElementsByClassName('mytask');
    for (let i = 0; i < ps.length; i++)
    {
        child = ps[i];
        lines.push(child.getElementsByTagName('P')[0].textContent);
    }
    window.localStorage.setItem("loc", JSON.stringify(lines));
}

function CreateUnit(tex)
{
    let element = document.getElementById('temp').content.cloneNode(true).childNodes[1];
    element.getElementsByTagName('P')[0].textContent = tex;
    return element;
}

function TaskLoading()
{
    let div = document.getElementById("mylist");
    if (div)
    {
        let element = null;
        let list = JSON.parse(window.localStorage.getItem("loc"));
        if (list)
        {
            for (let i = 0; i < list.length; i++) {
                element = CreateUnit(list[i]);
                div.appendChild(element);
            }
        }
    }
}

window.addEventListener("load", function(event) {
    TaskLoading();
    document.addEventListener("submit", AddTask);
});
  
