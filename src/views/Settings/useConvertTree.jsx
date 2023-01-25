const useConvertTree = (flattenarr) => {
  let id = 0;
  let i = 0;
  const treetoarr = (tr, tree, pid) => {
    tree &&
      tree.map((t) =>
        tr.push({
          name: t.name,
          id: ++id,
          pid: pid[i],
          ...(t.children
            ? ((pid.push(id), ++i), treetoarr(tr, t.children, pid))
            : treetoarr(tr, t.children, pid)),
        })
      );

    i < 1 ? (i = 0) : (pid.pop(), --i);
  };
  const arrtotree = (list) => {
    var map = {},
      node,
      roots = [],
      i;

    for (i = 0; i < list.length; i += 1) {
      map[list[i].id] = i; // initialize the map
      list[i].children = []; // initialize the children
    }

    for (i = 0; i < list.length; i += 1) {
      node = list[i];
      if (node.pid !== "0") {
        // if you have dangling branches check that map[node.parentId] exists
        list[map[node.pid]] && list[map[node.pid]].children.push(node);
      }
    }

    for (let i = list.length - 1; i > 0; i--)
      if (list[i].pid !== 0 || list[i].pid == 6) {
        alert(list[i].name);
        list.splice(i, 1);
        //          list.splice(i, 1);
      }
    console.log(JSON.stringify(list));
    return roots;
  };

  return { flattenarr, treetoarr, arrtotree };
};
export { useConvertTree };

/*


let new_array=array.map(function(ele){
       
       return {...ele,Active:'false'};
     })


[{"id":1,"pid":0},
{"name":"received","id":2,"pid":0},

{"name":"rer","id":3,"pid":0},
{"name":"bevad","id":4,"pid":3},

{"name":"new","id":5,"pid":0},
{"name":"selected","id":6,"pid":3},
{"name":"postponed","id":7,"pid":5},
{"name":"removed","id":8,"pid":6},

{"name":"labels","id":9,"pid":0}]

*/
