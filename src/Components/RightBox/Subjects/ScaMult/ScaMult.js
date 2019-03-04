import React from 'react';
import {connect} from 'react-redux';
//eslint-disable-next-line
import tachyons from 'tachyons';
import './ScaMult.css'
import Matrix from '../../Reusable/Matrix/Matrix';
import MatrixSelect from '../../Reusable/MatrixSelect/MatrixSelect';
import CalculateButton from '../../Reusable/CalculateButton/CalculateButton';
import MatrixSM from './MatrixSM/MatrixSM'
import {
	setCreateSM,
	setScaMultMatrix, 
	setChangeMatrixSM, 
	setScaleValue
} from './State/actions';

const mapStateToProps = (state) => { 
  	return {
  		ScaMultRows: state.createMatrix.ScaMultRows, 
  		ScaMultCols: state.createMatrix.ScaMultCols, 
  		ScaMultMatrixArray: state.createMatrix.ScaMultMatrixArray,
  		ScaMultMatrix: state.createMatrix.ScaMultMatrix, 
  		ScaleValue: state.createMatrix.ScaleValue
	}
}

const mapDispatchToProps = (dispatch) => { 
 	return {
 		setCreateSM: (event) => dispatch(
 			setCreateSM(
 				document.getElementById('RowsSM').value, 
 				document.getElementById('ColsSM').value
 			)
 		),
 		setScaMultMatrix: () => dispatch(
 			setScaMultMatrix()
 		), 
 		setChangeMatrixSM: (event) => dispatch(
 			setChangeMatrixSM(
 				event.target.id, 
 				event.target.value
 			)
 		), 
 		setScaleValue: (event) => dispatch(
 			setScaleValue(
 				event.target.value
 			)
 		)
	}
}

class ScaMult extends React.Component {
	render() {
		const {ScaMultRows, ScaMultCols, setCreateSM, ScaMultMatrix, setScaMultMatrix, setChangeMatrixSM, setScaleValue, ScaMultMatrixArray, ScaleValue} = this.props;
		return(
			<div className="bg-black p2">
				<h1 className="center">Scalar Multiplication</h1>
				<div> 
					<MatrixSelect	setId={"RowsSM"}  setCreateMatrix={setCreateSM} />
					<MatrixSelect	setId={"ColsSM"}  setCreateMatrix={setCreateSM} />
				</div>
				{ 
					(ScaMultCols) ?
						<div> 
							<div>
								<input className="matBox" onChange={setScaleValue}/>
								<Matrix assignID={'mat3'} rows={ScaMultRows} cols={ScaMultCols} setChangeMatrix={setChangeMatrixSM}/>
							</div>
							<CalculateButton setAddMatrix={setScaMultMatrix} />
						</div>
					:  
						<p></p>
				}
				{
					(ScaMultMatrix) ? 
						//<p>{math.multiply(ScaleValue, ScaMultMatrixArray)}</p>
						<MatrixSM scale={ScaleValue} matrix={ScaMultMatrixArray} />
					:(ScaMultRows) ?
						<p>Click submit to compute</p>
					: 
						<p>Select the size of the matrices</p>
				}
			</div> 
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ScaMult);  













