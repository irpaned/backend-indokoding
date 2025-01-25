import j from "joi";

export const TaskSchema = j.object({
  title: j.string().required(),
  description: j.string().optional(),
  isCompleted: j.boolean(),
});
