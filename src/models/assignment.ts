export type AssignmentType = {
  created_at: string;
  description: string;
  due_date: string;
  id: number;
  submissions: { submission_link: string }[];
  title: string;
};

export type AssignmentDetailsType = AssignmentType & { description: string };
