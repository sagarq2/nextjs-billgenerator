import style from "./ComingSoon.module.scss";


const ComingSoon = () => {

   


    return (
        <section className={`${style.ComingSoon} p-50`}>
            <div className="material-symbols-outlined color00A" style={{fontSize:100}}>work_alert</div>
            <div className="font36 fw700 color00A mt-20"><h2>Coming Soon</h2></div>
            <div className="font16 fw400 color00A pl-50 pr-50 pt-20">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p></div>
        </section >
    );
};

export default ComingSoon;
