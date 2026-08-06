import React, { useState } from "react"
import { Modal, IconButton, Box, Backdrop, Typography } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import SchoolIcon from '@mui/icons-material/School'

const Certificate = ({ ImgSertif }) => {
    const [open, setOpen] = useState(false)
    const assetUrl = ImgSertif || ""
    const isPdf = assetUrl.toLowerCase().endsWith(".pdf")

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <Box component="div" sx={{ width: "100%" }}>
            <Box
                sx={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: 2,
                    boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
                        "& .certificate-image": {
                            filter: "contrast(1.05) brightness(1) saturate(1.1)",
                        },
                    },
                }}>
                <Box
                    sx={{
                        position: "relative",
                        "&::before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: "rgba(0, 0, 0, 0.05)",
                            zIndex: 1,
                        },
                    }}>
                    {isPdf ? (
                        <Box
                            component="a"
                            href={assetUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                textDecoration: "none",
                                color: "inherit",
                                minHeight: 240,
                                p: 4,
                                background: "linear-gradient(135deg, rgba(71, 85, 105, 0.95), rgba(15, 23, 42, 0.95))",
                                position: "relative",
                                borderRadius: 2,
                                overflow: "hidden",
                                cursor: "pointer",
                                "&:hover": {
                                    transform: "scale(1.01)",
                                },
                            }}>
                            <Box sx={{ textAlign: "center", zIndex: 2 }}>
                                <SchoolIcon sx={{ fontSize: 56, mb: 1, color: "#f59e0b" }} />
                                <Typography variant="h6" sx={{ fontWeight: 700, color: "white", mb: 1 }}>
                                    Sertifikat PDF
                                </Typography>
                                <Typography variant="body2" sx={{ color: "#cbd5e1" }}>
                                    Klik untuk membuka di tab baru
                                </Typography>
                            </Box>
                        </Box>
                    ) : (
                        <img
                            className="certificate-image"
                            src={assetUrl}
                            alt="Certificate"
                            style={{
                                width: "100%",
                                height: "auto",
                                display: "block",
                                objectFit: "cover",
                                filter: "contrast(1.10) brightness(0.9) saturate(1.1)",
                                transition: "filter 0.3s ease",
                                aspectRatio: "16/11.5",
                            }}
                            onClick={handleOpen}
                        />
                    )}
                </Box>
            </Box>

            {!isPdf && (
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 300,
                        sx: {
                            backgroundColor: "rgba(0, 0, 0, 0.9)",
                            backdropFilter: "blur(5px)",
                        },
                    }}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: 0,
                        padding: 0,
                        "& .MuiBackdrop-root": {
                            backgroundColor: "rgba(0,0,0,0.9)",
                        },
                    }}>
                    <Box
                        sx={{
                            position: "relative",
                            width: "auto",
                            maxWidth: "90vw",
                            maxHeight: "90vh",
                            m: 0,
                            p: 0,
                            outline: "none",
                            "&:focus": { outline: "none" },
                        }}>
                        <IconButton
                            onClick={handleClose}
                            sx={{
                                position: "absolute",
                                right: 16,
                                top: 16,
                                color: "white",
                                bgcolor: "rgba(0,0,0,0.6)",
                                zIndex: 1,
                                padding: 1,
                                "&:hover": {
                                    bgcolor: "rgba(0,0,0,0.8)",
                                    transform: "scale(1.1)",
                                },
                            }}
                            size="large">
                            <CloseIcon sx={{ fontSize: 24 }} />
                        </IconButton>
                        <img
                            src={assetUrl}
                            alt="Certificate Full View"
                            style={{
                                display: "block",
                                maxWidth: "100%",
                                maxHeight: "90vh",
                                margin: "0 auto",
                                objectFit: "contain",
                            }}
                        />
                    </Box>
                </Modal>
            )}
        </Box>
    )
}

export default Certificate
