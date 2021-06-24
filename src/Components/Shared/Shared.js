import styled from "@emotion/styled";

export const SmlImage = styled.img`
  height: 48px;
  width: 48px;
  /* margin: auto; */
  /* width: 26px; */
  /* margin: 8px; */
`;
const Bar = styled.div`
  margin: auto;
  --moon-dim: 46px;
  --moon-light: #e4e6eb;
  --moon-dark: #28282a;
  @media (prefers-color-scheme: dark) {
    --moon-light: #e8e8e8;
    --moon-dark: #090911;
  }
  width: var(--moon-dim);
  height: var(--moon-dim);

  overflow: hidden;
  -webkit-mask-image: -webkit-radial-gradient(white, black);
  /* display: flex; */
  background: ${(props) =>
    props.value < 0.5 ? "var(--moon-light)" : "var(--moon-dark)"};
  border-radius: 100%;
  position: relative;
  /* transform: rotate(45deg); */
  transform: ${(props) => (props.value < 0.5 ? "scaleX(1)" : "scaleX(-1)")};
`;
const Value = styled.progress`
  position: absolute;
  /* top: ${(props) => -Math.abs(50 - props.value * 100) + "%"}; */
  left: 50%;
  top: 50%;    
  transform: translate(-50%, -50%); 
  height: 100%;
  border: none;
  /* height: ${(props) => 200 - Math.abs(100 - props.value * 100) + "%"}; */
  width: ${(props) => Math.abs(100 - props.value * 200) + "%"};
  -webkit-appearance: none;
  border-radius: 100%;
  background: ${(props) =>
    props.value < 0.5 ? "var(--moon-dark)" : "var(--moon-light)"};
  border: none;
  overflow: hidden;
  -webkit-mask-image: -webkit-radial-gradient(white, black);
  display: flex;
  [value] {
    -webkit-appearance: none;
    background: ${(props) =>
      props.value < 0.5 ? "var(--moon-dark)" : "var(--moon-light)"};
  }
  ::-webkit-progress-bar {
    background: ${(props) =>
      props.value < 0.5 ? "var(--moon-dark)" : "var(--moon-light)"};
  }
  ::-webkit-progress-value {
    background: ${(props) =>
      props.value < 0.5 ? "var(--moon-dark)" : "var(--moon-light)"};
  }
  ::-moz-progress-bar {
    background: ${(props) =>
      props.value < 0.5 ? "var(--moon-dark)" : "var(--moon-light)"};
  }
`;
const HalfCircle = styled.div`
  height: 100%;
  width: 50%;
  background: ${(props) =>
    props.value < 0.5 ? "var(--moon-dark)" : "var(--moon-light)"};
  /* background: red; */
  position: absolute;
`;
export const Moon = ({ value }) => (
  <Bar value={value}>
    <HalfCircle value={value} />
    <Value value={value} />
  </Bar>
);
const moony = styled.progress`
  --moon-dimensions: 26px;
  --moon-dark: #48484a;
  --moon-light: #f2f2f2;
  width: var(--moon-dimensions);
  height: var(--moon-dimensions);
  background: var(--moon-dark);
  border: none;
  border-radius: 100%;
  overflow: hidden;
  margin: 12px;

  [value] {
    -webkit-appearance: none;
    appearance: none;
    width: var(--moon-dimensions);
    height: var(--moon-dimensions);
    background: var(--moon-light);
    border-radius: ${(props) => props.value * 100 + "%"};
  }
  ::-webkit-progress-bar {
    width: var(--moon-dimensions);
    height: var(--moon-dimensions);
    background: var(--moon-dark);
    border-radius: 100%;
  }
  ::-webkit-progress-value {
    /* width: var(--moon-dimensions); */
    height: var(--moon-dimensions);
    background: var(--moon-light);
    /* border: 1px solid red; */
    border-radius: ${(props) => props.value * 100 + "%"};
  }
  ::-moz-progress-bar {
    width: var(--moon-dimensions);
    height: var(--moon-dimensions);
    background: var(--moon-light);
    border-radius: ${(props) => props.value * 100 + "%"};
  }
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  width: 100%;
`;
export const GraphSection = styled.section`
  height: max(35vh, 300px);
  padding: 1rem;
`;
export const Column = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Half = styled.div`
  max-width: 50%;
  display: grid;
  place-items: center;
`;

export const TextLrg = styled.p`
  font-size: 4rem;
  margin: 1rem;
  font-weight: bold;
`;

export const TextMid = styled.p`
  font-size: 1.25rem;
  margin: 0.5rem 0;
`;
export const TextSml = styled.p`
  font-size: 0.7rem;
  margin: 0.25rem 0;
  font-weight: 300;
`;
export const SpanSml = styled.span`
  font-size: 0.8rem;
  color: #999;
  /* opacity: 0.6; */
`;
export const StyledRow = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > * {
    width: 100%;
  }
`;

export const StatsScroll = styled.div`
  overflow-x: scroll;
  width: 100%;
`;
export const Container = styled.div`
  width: 100%;
  display: flex;
  min-width: max-content;
  justify-content: space-evenly;
  > * {
    min-width: 100px;
    height: 160px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;
export const Progress = styled.progress`
  --progress-primary: linear-gradient(
    to right,
    var(--color-primary),
    var(--color-primary-shade)
  );
  --progress-secondary: linear-gradient(
    to right,
    var(--color-secondary),
    var(--color-secondary-shade)
  );
  margin: 1rem 0;
  background: #f2f2f2;
  border-radius: 10px;
  -webkit-appearance: none;
  appearance: none;
  width: min(100%, 550px);
  min-height: 20px;
  height: 1rem;
  border-radius: 10px;
  overflow: hidden;
  border: none;
  margin-bottom: 1rem;
  padding: 0;
  [value] {
    background: #f2f2f2;
    border-radius: 10px;
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    min-height: 20px;
    height: 20px;
    border: none;
    padding: 0;
  }
  ::-webkit-progress-bar {
    background: #f2f2f2;
    background-color: #f2f2f2;
    border-radius: 10px;
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    min-height: 20px;
    height: 20px;
    border: none;
    padding: 0;
  }
  ::-webkit-progress-value {
    background: ${(props) =>
      props?.red
        ? "var(--progress-secondary)"
        : "var(--progress-primary)"}; //#f2f2f2;
    background-size: 100vw;
    border-radius: 10px;
    -webkit-appearance: none;
    appearance: none;
    /* width: 100%; */
    min-height: 20px;
    height: 20px;
    border: none;
    padding: 0;
  }
  ::-moz-progress-bar {
    background: ${(props) =>
      props?.red
        ? "var(--progress-secondary)"
        : "var(--progress-primary)"}; //#f2f2f2;
    border-radius: 10px;
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    min-height: 20px;
    height: 20px;
    border: none;
    padding: 0;
  }
  @media (prefers-color-scheme: dark) {
    background: #0a0a0e;
    [value] {
      background: #0a0a0e;
    }
    ::-webkit-progress-bar {
      background: #0a0a0e;
    }
  }
`;

export const Row = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
