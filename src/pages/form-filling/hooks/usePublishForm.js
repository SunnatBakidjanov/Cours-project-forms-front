import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLoader, setPulish } from '../../../redux/slices/createFormSlice';
import { useDisable } from '../../../hooks/useDisable';
import axiosPrivate from '../../../api/axiosPrivate';

const APP_URL = import.meta.env.VITE_API_URL;

export const usePublishForm = () => {
	const dispatch = useDispatch();
	const isPublish = useSelector(state => state.createForm.isPublish);
	const { isDisabled, handleDisableonClick } = useDisable(800);
	const { key } = useParams();

	const handlePublish = async () => {
		const nextIsPublic = !isPublish;

		dispatch(setLoader(true));
		dispatch(setPulish(nextIsPublic));

		try {
			const res = await axiosPrivate.patch(`${APP_URL}/api/forms/${key}/public`, {
				isPublic: nextIsPublic,
			});

			dispatch(setPulish(res?.data?.isPublic));
		} catch (error) {
			console.error('Publish error: ', error);
		} finally {
			dispatch(setLoader(false));
			handleDisableonClick();
		}
	};

	return { handlePublish, isDisabled, isPublish };
};
