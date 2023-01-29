const useConvertTree = (flattenarr) => {
  let id = 0;
  let i = 0;
  let level = 0;
  const zerotreetoarr = (tr, tree, pid) => {
    id = 0;
    treetoarr(tr, tree, pid);
    delpar(tr);
  };

  const treetoarr = (tr, tree, pid) => {
    tree &&
      tree.map((t) =>
        tr.push({
          name: t.name === "root" ? "root" : t.name,
          id: ++id,
          pid: pid[i],
          level: level,
          ...(t.children
            ? (level++, (pid.push(id), ++i), treetoarr(tr, t.children, pid))
            : ""),
        })
      );
    level--;
    i < 1 ? (i = 0) : (pid.pop(), --i);
  };

  const arrtotree = (list1) => {
    let list = list1;
    i;
    var byDate = list.slice(0);
    list = byDate.sort(function (a, b) {
      return a.id - b.id;
    });
    //
    for (i = 0; i < list.length; i += 1) {
      list[i].children = []; // initialize the children
    }
    let temp = list;
    for (let i = 0; i < list.length; i++) {
      fillarr(temp[i], list);
    }
    for (let i = temp.length - 1; i > 0; i--)
      if (temp[i].pid !== 0) temp.splice(i, 1);
    let flattenarr = delpar(temp);
    console.log("..........................." + JSON.stringify(flattenarr)); // if you have dangling branches check that map[node.parentId] exists

    return flattenarr;
  };

  const fillarr = (list, array) => {
    let y = array.filter((t) => {
      return t.pid == list.id && t;
    });

    for (let i = 0; i < y.length; i++) {
      list.children &&
        list.children.push({
          name: y[i].name,
          id: y[i].id,
          pid: y[i].pid,
          children: [],
        });
      list.children && fillarr(list.children[i], array);
    }
  };

  const delpar = (arr) => {
    return arr.map((t) => {
      if (t.children && t.children.length === 0) delete t.children;
      if (t.children) delpar(t.children);
      return t;
    });
  };
  return { flattenarr, zerotreetoarr, arrtotree };
};
export { useConvertTree };
