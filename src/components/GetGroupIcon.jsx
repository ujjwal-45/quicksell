const getGroupIcon = (groupName, groupType) => {
  console.log("groupName:", groupName, "groupType:", groupType);
    let srcIconPath = "";
    if (groupType === "status") {
      switch (groupType) {
        case "Todo":
          srcIconPath = "/icons/To-do.svg";
          break;
        case "In Progress":
          srcIconPath = "/icons/in-progress.svg";
          break;
        case "Backlog":
          srcIconPath = "/icons/Backlog.svg";
          break;
        default:
          srcIconPath = "/icons/default-priority.svg";
          break;
      }
    } else if (groupType === "priority") {
        switch (groupName) {
          case "4":
            srcIconPath = "/icons/SVG - Urgent Priority colour.svg";
            break;
          case "3":
            srcIconPath = "/icons/Img - High Priority.svg";
            break;
          case "2":
            srcIconPath = "/icons/Img - Medium Priority.svg";
            break;
          case "1":
            srcIconPath = "/icons/Img - Low Priority.svg";
            break;
          case "0":
            srcIconPath = "/icons/No-Priority.svg";
            break;
          default:
            srcIconPath = "/icons/default-priority.svg";
            break;
        }
    }
    else if (groupType === "userId") {
        srcIconPath = "/icons/actor1.jpg"
    }
  console.log("Icon Path:", srcIconPath);

  return srcIconPath;
  
}

export default getGroupIcon;