import { Circles } from "react-loader-spinner";

const Loader: React.FC = () => {
  return (
    <div style={styles.Loader}>
      <Circles
        height={60}
        width={60}
        color="#333"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

const styles: { Loader: React.CSSProperties } = {
  Loader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 9999,
  },
};

export default Loader;
