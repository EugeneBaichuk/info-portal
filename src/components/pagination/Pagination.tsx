import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export const PaginationOutlined = () => {
  return (
    <div style={{margin: "2rem auto 0 auto"}}>
        <Stack spacing={2}>
            <Pagination count={10} variant="outlined" />
        </Stack>
    </div>
  );
}