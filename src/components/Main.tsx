import Number from "./Number";

const Main = () => {
  return (
    <main className="p-8">
      <Number number={1} />
      <div className="w-full flex flex-col items-center justify-center mt-16">
        <div className="grid grid-cols-2 gap-4 mb-16 md:grid-cols-4">
          <img
            src="/src/assets/desktop/image-woman-in-videocall.jpg"
            alt="woman-in-ideocall"
            className="w-full rounded-lg"
          />
          <img
            src="/src/assets/desktop/image-women-videochatting.jpg"
            alt="women-videochatting"
            className="w-full rounded-lg"
          />
          <img
            src="/src/assets/desktop/image-men-in-meeting.jpg"
            alt="men-in-meeting"
            className="w-full rounded-lg"
          />
          <img
            src="/src/assets/desktop/image-man-texting.jpg"
            alt="man-texting"
            className="w-full rounded-lg"
          />
        </div>
        <div className="  text-center w-7/10">
          <h3 className="text-mobile-3 text-cyan-600 tracking-[.4em] uppercase mb-4 md:text-tablet-3">
            Built for modern use
          </h3>
          <h2 className="header-2 mb-8">Smarter meetings, all in one place</h2>
          <p className="text-content text-slate-600">
            Send messages, share files, show your screen, and record your
            meetings — all in one workspace. Control who can join with
            invite-only team access, data encryption, and data export.
          </p>
        </div>
      </div>
    </main>
  );
};
export default Main;
