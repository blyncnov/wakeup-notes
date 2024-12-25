export interface NoteProps {
  id: number;
  note_title: string;
  note_description: string;
  note_content: string;
  note_label: string;
  note_visibility: "public" | "protected";
  note_location: string;
  note_latitude: number;
  note_longitude: number;
}
