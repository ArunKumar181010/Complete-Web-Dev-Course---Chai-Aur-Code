export const UserRolesEnum = {    // help to create constant valuse so no speeling mistakes
  ADMIN: "admin",
  PROJECT_ADMIN: "project_admin",
  MEMBER: "member",
};

export const AvailableUserRole = Object.values(UserRolesEnum);   // export help the variable available in other files

export const TaskStatusEnum = {
  TODO: "todo",
  IN_PROGRESS: "in_progress",
  DONE: "done",
};

export const AvailableTaskStatus = object.values(TaskStatusEnum);
