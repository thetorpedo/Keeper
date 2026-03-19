import EditableText from "./utils/editable-text.tsx";

interface CharacterProfileProps {
  characterData: Record<string, any>;
  updateField: (field: string, newValue: string) => void;
  isOwner?: boolean;
}

export default function CharacterProfile({
  characterData,
  updateField,
  isOwner = true,
}: CharacterProfileProps) {
  return (
    <>
      <div className="lowercase font-alegraya-sans max-sm:text-sm text-lg text-center max-sm:mb-2 text-gray-400">
        {isOwner ? "Click on a characteristic to edit it" : "Character Profile"}
      </div>
      <div className="max-sm:text-lg/7 text-xl">
        <p>Hello,</p>
        <p>
          My name is{" "}
          <EditableText
            value={characterData.name}
            isOwner={isOwner}
            onSave={(val) => updateField("name", val)}
            isName={true}
          />
          , (
          <EditableText
            value={characterData.pronouns}
            isOwner={isOwner}
            onSave={(val) => updateField("pronouns", val)}
          />
          ).
        </p>
        <p>
          I'm{" "}
          <EditableText
            value={characterData.age}
            isOwner={isOwner}
            onSave={(val) => updateField("age", val)}
          />{" "}
          years old, and stand{" "}
          <EditableText
            value={characterData.height}
            isOwner={isOwner}
            onSave={(val) => updateField("height", val)}
          />{" "}
          tall.
        </p>
        <p>
          I'm the party's{" "}
          <EditableText
            value={characterData.role}
            isOwner={isOwner}
            onSave={(val) => updateField("role", val)}
          />
          .
        </p>
        <p>
          When people see me, they first notice my{" "}
          <EditableText
            value={characterData.feature1}
            isOwner={isOwner}
            onSave={(val) => updateField("feature1", val)}
          />
          ,{" "}
          <EditableText
            isOwner={isOwner}
            value={characterData.feature2}
            onSave={(val) => updateField("feature2", val)}
          />
          , and{" "}
          <EditableText
            isOwner={isOwner}
            value={characterData.feature3}
            onSave={(val) => updateField("feature3", val)}
          />
          .
        </p>
        <p>
          I wear a{" "}
          <EditableText
            value={characterData.clothing1}
            isOwner={isOwner}
            onSave={(val) => updateField("clothing1", val)}
          />
          , a{" "}
          <EditableText
            value={characterData.clothing2}
            isOwner={isOwner}
            onSave={(val) => updateField("clothing2", val)}
          />
          , and move with{" "}
          <EditableText
            value={characterData.vibe}
            isOwner={isOwner}
            onSave={(val) => updateField("vibe", val)}
          />
          .
        </p>
        <p>
          I'm from{" "}
          <EditableText
            value={characterData.origin}
            isOwner={isOwner}
            onSave={(val) => updateField("origin", val)}
          />
          , where people are known for{" "}
          <EditableText
            isOwner={isOwner}
            value={characterData.originTrait}
            onSave={(val) => updateField("originTrait", val)}
          />
          .
        </p>
        <p>
          I believe in{" "}
          <EditableText
            value={characterData.belief}
            isOwner={isOwner}
            onSave={(val) => updateField("belief", val)}
          />
          , but my{" "}
          <EditableText
            value={characterData.flaw}
            isOwner={isOwner}
            onSave={(val) => updateField("flaw", val)}
          />{" "}
          side can get in my way.
        </p>
      </div>
    </>
  );
}
