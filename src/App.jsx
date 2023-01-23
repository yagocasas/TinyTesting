import React, { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function App() {
  const [initialValue, setInitialValue] = useState(undefined);
  useEffect(() => {
    // una aplicación real podría hacer una solicitud de búsqueda aquí para obtener el contenido
    setTimeout(() => setInitialValue("<p>Once upon a time...</p>"), 500);
  }, []);
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
      <Editor
        // disabled={true}
        apiKey="z5sa4nd5iz4efgoggtzqazhf3xe4w4s866m9yjxewljbnya7"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={initialValue}
        init={{
          height: 500,
          // menubar: false,
          selector: "textarea",
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image imagetools",
            "editimage",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
            "paste",
            "powerpaste",
            "help",
            "save",
            "export",
            "charmap",
            // "quickbars pagebreak",
            // "quickbars image editimage",
            "quickbars",
            "emoticons",
            "print",
            "media",
            "searchreplace",
          ],
          imagetools_toolbar:
            "rotateleft rotateright | flipv fliph | editimage imageoptions",
          quickbars_insert_toolbar: "quickimage quicktable | hr pagebreak",
          // quickbars_image_toolbar: 'alignleft aligncenter alignright ', //rotateleft rotateright | imageoptions
          toolbar:
            " searchreplace undo redo save copy cut paste powerpaste | blocks | styleselect" +
            " bold underline italic forecolor backcolor fontselect fontsizeselect charmap emoticons | alignleft aligncenter " +
            "alignright alignjustify lineheight | bullist numlist outdent indent anchor quickimage media | " + //imagetools
            "removeformat | help",
          paste_data_images: true,
          paste_data_word: true,
          save_enablewhendirty: false,
          save_oncancelcallback: () => {
            console.log("Save canceled");
          }, //This option allows you to specify the function that will be executed when the cancel button/command is invoked.
          save_onsavecallback: () => {
            console.log("Saved");
          }, //This option allows you to specify the function that will be executed when the save button/command is invoked.
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          menu: {
            edit: {
              title: "Edit",
              items: "undo redo | cut copy paste | selectall",
            },
            insert: { title: "Insert", items: "link image media" },
            view: { title: "View", items: "visualaid" },
            format: {
              title: "Format",
              items:
                "bold italic underline strikethrough superscript subscript | formats | removeformat",
            },
          },
        }}
      />
      <form>
        <button name="submitbtn">GUARDAR</button>
      </form>
      <button onClick={log}>Log editor content</button>
    </>
  );
}
