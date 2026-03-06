import EditableText from "./utils/EditableText.tsx";

interface CharacterProfileProps {
    characterData: any; 
    updateField: (field: string, newValue: string) => void;
}

export default function CharacterProfile({ characterData, updateField }: CharacterProfileProps) {
    return (
        <>
        <div className="lowercase font-alegraya-sans max-sm:text-sm text-lg text-center max-sm:mb-2 text-gray-400">Click on a characteristic to edit it</div>
        <div className="max-sm:text-lg/7 text-xl">
            <p>Hello,</p>
            <p >My name is <EditableText value={characterData.name} onSave={(val) => updateField('name', val)} name={true}/>, (<EditableText value={characterData.pronouns} onSave={(val) => updateField('pronouns', val)}/>).</p>    
            <p>I'm <EditableText value={characterData.age} onSave={(val) => updateField('age', val)}/> years old, and stand <EditableText value={characterData.height} onSave={(val) => updateField('height', val)}/> tall.</p>
            <p>I'm the party's <EditableText value={characterData.role} onSave={(val) => updateField('role', val)}/>.</p>
            <p>When people see me, they first notice my <EditableText value={characterData.feature1} onSave={(val) => updateField('feature1', val)}/>, <EditableText value={characterData.feature2} onSave={(val) => updateField('feature2', val)}/>, and <EditableText value={characterData.feature3} onSave={(val) => updateField('feature3', val)}/>.</p>
            <p>I wear a <EditableText value={characterData.clothing1} onSave={(val) => updateField('clothing1', val)}/>, a <EditableText value={characterData.clothing2} onSave={(val) => updateField('clothing2', val)}/>, and move with <EditableText value={characterData.vibe} onSave={(val) => updateField('vibe', val)}/>.</p>
            <p>I'm from <EditableText value={characterData.origin} onSave={(val) => updateField('origin', val)}/>, where people are known for <EditableText value={characterData.originTrait} onSave={(val) => updateField('originTrait', val)}/>.</p>
            <p>I believe in <EditableText value={characterData.belief} onSave={(val) => updateField('belief', val)}/>, but my <EditableText value={characterData.flaw} onSave={(val) => updateField('flaw', val)}/> side can get in my way.</p>
        </div>
        </>
    )
}