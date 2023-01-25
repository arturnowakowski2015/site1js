const useConvertTree = (flattenarr) => {
  let id = 0;
  let i = 0;
  const zero = (tr, tree, pid) => {
    id = 0;
    treetoarr(tr, tree, pid);
  };
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
  const arrtotree = (list1) => {
    let list = list1;
    var map = {},
      node,
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

    for (let i = 0; i < list.length; i++)
      if (list[i].pid !== 0 || list[i].pid == 6) {
        list.splice(i, 1);
        //          list.splice(i, 1);
      }
    for (let i = list.length - 1; i > 0; i--)
      if (list[i].pid !== 0 || list[i].pid == 6) {
        list.splice(i, 1);
        //          list.splice(i, 1);
      }

    return deleteparenthises(list);
  };
  const deleteparenthises = (nodes) => {
    return nodes.map((t) => {
      if (t.children.length === 0) delete t.children;
      if (t.children) deleteparenthises(t.children);
      return t;
    });
  };
  return { flattenarr, zero, arrtotree };
};
export { useConvertTree };
