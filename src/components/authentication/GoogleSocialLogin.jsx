
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import  Box  from "@mui/material/Box";
import { Button } from "@mui/material";
import Swal from 'sweetalert2'


const GoogleSocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                Swal.fire(
                    'Good job! ',
                    'Google SignUp successfuly!',
                    'success'
                  )
                       
            })
            navigate(from, { replace: true });
    }

    return (
        <Box>
    
            <Box>
                <Button sx={{width:'41%'}}  type='submit'  variant="contained" color="success" onClick={handleGoogleSignIn}>
                  Google SingIn
                </Button>
            </Box>
        </Box>
    );
};

export default GoogleSocialLogin;