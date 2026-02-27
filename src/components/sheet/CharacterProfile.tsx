import EditableText from "./utils/EditableText.tsx";

const handleUpdate = () => {
}

export default function CharacterProfile() {
    return (
        <>
        <div className="lowercase font-alegraya-sans text-lg text-center text-gray-400">Click on a characteristic to edit it</div>
        <div className="text-xl">
            <p>Hello,</p>
            <p >My name is <EditableText value="Merlim" onSave={handleUpdate}/>, (<EditableText value="he/him" onSave={handleUpdate}/>).</p>    
            <p>I'm <EditableText value="30" onSave={handleUpdate}/> years old, and stand <EditableText value="80cm" onSave={handleUpdate}/> tall.</p>
            <p>I'm the party's <EditableText value="Wizard" onSave={handleUpdate}/>.</p>
            <p>When people see me, they first notice my <EditableText value="fur" onSave={handleUpdate}/>, <EditableText value="long whiskers" onSave={handleUpdate}/>, and <EditableText value="short temper" onSave={handleUpdate}/>.</p>
            <p>I wear a <EditableText value="wizard hat" onSave={handleUpdate}/>, a <EditableText value="wizard robe" onSave={handleUpdate}/>, and move with <EditableText value="feralessness" onSave={handleUpdate}/>.</p>
            <p>I'm from a <EditableText value="lonely island" onSave={handleUpdate}/>, where people are known for <EditableText value="their steady pursuit of pleasure" onSave={handleUpdate}/>.</p>
            <p>I believe in <EditableText value="the ends" onSave={handleUpdate}/>, but my <EditableText value="thief" onSave={handleUpdate}/> side can get in my way.</p>
        </div>
        </>
    )
}