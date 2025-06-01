import React, { useState } from 'react';
import {
    Box,
    Container,
    VStack,
    HStack,
    Text,
    Input,
    Button,
    FormControl,
    FormLabel,
    Checkbox,
    useToast,
    Flex,
    Image,
    InputGroup,
    InputLeftElement,
    Icon,
    useColorModeValue,
    Link
} from '@chakra-ui/react';
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';

export default function ConsultationForm() {
    const { t } = useTranslation()
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        acceptTerms: false
    });
    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast();

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    let bot = {
        TOKEN: "8079582965:AAHnzaDrrD3kW-sSM_PxELulc-gj83rPmLg",
        chatID: "-1002560271570",
        message: `
              Здравствуйте, для вас консультацию!
              Имя 👤: ${formData.name}; 
              Номер телефона ☎: ${formData.phone};
              `,
    };
    const encodedMessage = encodeURIComponent(bot.message);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.phone) {
            toast({
                title: t("Xatolik"),
                description: t("Iltimos, barcha majburiy maydonlarni to'ldiring"),
                status: "error",
                duration: 3000,
                isClosable: true,
            });
            return;
        }

        if (!formData.acceptTerms) {
            toast({
                title: t("Xatolik"),
                description: t("Iltimos, shaxsiy ma'lumotlarni qayta ishlash shartlarini qabul qiling"),
                status: "error",
                duration: 3000,
                isClosable: true,
            });
            return;
        }

        fetch(
            `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${encodedMessage} `,
            {
                method: "GET",
            }
        ).then(
            () => {
                setTimeout(() => {
                    setIsLoading(false);
                    toast({
                        title: t("Muvaffaqiyat!"),
                        description: t("Sizning so'rovingiz qabul qilindi. Tez orada siz bilan bog'lanamiz."),
                        status: "success",
                        duration: 5000,
                        isClosable: true,
                    });
                    // Reset form
                    setFormData({ name: '', phone: '', acceptTerms: false });
                }, 2000);
            },
            (error) => {
                console.log(error);
            }
        );

        setIsLoading(true);
        // Simulate API call
    };

    const handleCallFromSite = () => {
        toast({
            title: "Qo'ng'iroq so'rovi",
            description: "Operatorlarimiz tez orada siz bilan bog'lanishadi",
            status: "info",
            duration: 3000,
            isClosable: true,
        });
    };

    return (
        <Box minH={{base:"90vh", lg:"100vh"}}
            bg={'#111111'}
            position="relative" overflow="hidden">
            {/* Background gradient */}
            <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                opacity={0.9}
            />

            {/* Background pattern overlay */}
            <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                opacity={0.1}
                backgroundSize="50px 50px"
            />

            <Container maxW="7xl" h="100vh" position="relative" zIndex={1}>
                <Flex align="center" justify="space-between" h="100%" py={{base:2, lg:8}}>
                    {/* Left side - Form */}
                    <Box
                        bg="rgba(0, 0, 0, 0.7)"
                        backdropFilter="blur(10px)"
                        borderRadius="2xl"
                        p={{ base: 1, lg: 8 }}
                        mr={{ base: 1, lg: 8 }}
                        boxShadow="0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                        border="1px solid rgba(255, 255, 255, 0.1)"
                    >
                        <VStack w={{ base: "100%", lg: '480px' }} spacing={6} align="stretch">
                            {/* Header */}
                            <Box>
                                <Text
                                    fontSize="sm"
                                    color="red.400"
                                    fontWeight="600"
                                    textTransform="uppercase"
                                    letterSpacing="wider"
                                    mb={3}
                                >
                                    — {t("Mutaxassis bilan konsultatsiya uchun")}
                                </Text>
                                <Text
                                    fontSize="3xl"
                                    fontWeight="bold"
                                    color="white"
                                    lineHeight={1.2}
                                >
                                    {t("QOʻNGʻIROQ")}
                                    <br />
                                    {t("BUYURTMA BERING")}
                                </Text>
                            </Box>

                            {/* Form */}
                            <Box as="form" onSubmit={handleSubmit}>
                                <VStack spacing={4}>
                                    <FormControl isRequired>
                                        <FormLabel color="gray.300" fontSize="sm">
                                            {t("First name*")}
                                        </FormLabel>
                                        <InputGroup>
                                            {/* <InputLeftElement>
                                                <Icon
                                                    mt={'10px'}
                                                    as={ProfileIco} color="gray.400" />
                                            </InputLeftElement> */}
                                            <Input
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                placeholder={t("First name*")}
                                                bg="rgba(255, 255, 255, 0.1)"
                                                border="1px solid rgba(255, 255, 255, 0.2)"
                                                color="white"
                                                _placeholder={{ color: 'gray.400' }}
                                                _hover={{
                                                    border: '1px solid rgba(255, 255, 255, 0.3)',
                                                    bg: 'rgba(255, 255, 255, 0.15)'
                                                }}
                                                _focus={{
                                                    border: '2px solid #667eea',
                                                    bg: 'rgba(255, 255, 255, 0.15)',
                                                    boxShadow: '0 0 0 1px #667eea'
                                                }}
                                                borderRadius="lg"
                                                h="50px"
                                            />
                                        </InputGroup>
                                    </FormControl>

                                    <FormControl isRequired>
                                        <FormLabel color="gray.300" fontSize="sm">
                                            {t("Phone number")} *
                                        </FormLabel>
                                        <InputGroup>
                                            {/* <InputLeftElement>
                                                <PhoneIcon mt={'10px'} color="gray.400" />
                                            </InputLeftElement> */}
                                            <Input
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                placeholder="+998 (__) ___-__-__"
                                                bg="rgba(255, 255, 255, 0.1)"
                                                border="1px solid rgba(255, 255, 255, 0.2)"
                                                color="white"
                                                _placeholder={{ color: 'gray.400' }}
                                                _hover={{
                                                    border: '1px solid rgba(255, 255, 255, 0.3)',
                                                    bg: 'rgba(255, 255, 255, 0.15)'
                                                }}
                                                _focus={{
                                                    border: '2px solid #667eea',
                                                    bg: 'rgba(255, 255, 255, 0.15)',
                                                    boxShadow: '0 0 0 1px #667eea'
                                                }}
                                                borderRadius="lg"
                                                h="50px"
                                            />
                                        </InputGroup>
                                    </FormControl>

                                    <Text fontSize="xs" color="gray.400" textAlign="left" w="full">
                                        (*) {t("bilan belgilangan maydonlar majburiy to'ldirilishi kerak!")}
                                    </Text>

                                    <Checkbox
                                        name="acceptTerms"
                                        isChecked={formData.acceptTerms}
                                        onChange={handleInputChange}
                                        colorScheme="red"
                                        size="sm"
                                    >
                                        <Text fontSize="sm" color="gray.300">
                                            {t("'Buyurtma berish' tugmasini bosish orqali siz")}{' '}
                                            <Text as="span" color="red.400" textDecoration="underline" cursor="pointer">
                                                {t("shaxsiy ma'lumotlarni qayta ishlash shartlari")}
                                            </Text>
                                            {t("ni qabul qilasiz.")}
                                        </Text>
                                    </Checkbox>

                                    <Button
                                        type="submit"
                                        w="full"
                                        h="60px"
                                        bg="transparent"
                                        border="2px solid #667eea"
                                        color="white"
                                        fontSize="md"
                                        fontWeight="600"
                                        textTransform="uppercase"
                                        letterSpacing="wider"
                                        isLoading={isLoading}
                                        loadingText={t("Yuborilmoqda...")}
                                        _hover={{
                                            bg: 'rgba(102, 126, 234, 0.1)',
                                            transform: 'translateY(-2px)',
                                            boxShadow: '0 10px 25px rgba(102, 126, 234, 0.3)'
                                        }}
                                        _active={{
                                            transform: 'translateY(0)'
                                        }}
                                        transition="all 0.3s ease"
                                        borderRadius="lg"
                                    >
                                        {t("Qoʻngʻiroqni buyurtma qiling")}
                                    </Button>

                                    <Text fontSize="sm" color="gray.400" textAlign="center">
                                        {t("Yoki siz bizga qoʻngʻiroq qilishingiz mumkin")}
                                    </Text>

                                    <Link
                                        href='tel:+998770008900'
                                        target='_blank'
                                        display={'flex'}
                                        alignItems={'center'}
                                        justifyContent={'center'}
                                        w="full"
                                        h="60px"
                                        bgGradient="linear(to-r, #e53e3e, #c53030)"
                                        color="white"
                                        fontSize="md"
                                        fontWeight="600"
                                        textTransform="uppercase"
                                        letterSpacing="wider"
                                        // onClick={handleCallFromSite}
                                        _hover={{
                                            bgGradient: "linear(to-r, #c53030, #9c2424)",
                                            transform: 'translateY(-2px)',
                                            boxShadow: '0 10px 25px rgba(229, 62, 62, 0.4)'
                                        }}
                                        _active={{
                                            transform: 'translateY(0)'
                                        }}
                                        transition="all 0.3s ease"
                                        borderRadius="lg"
                                    >
                                        {t("Saytdan qoʻngʻiroq qiling")}
                                    </Link>
                                </VStack>
                            </Box>
                        </VStack>
                    </Box>

                    {/* Right side - Image */}
                    <Box
                        display={{ base: 'none', lg: 'block' }}
                    >
                        <Box
                            width={'100%'}
                            left={'110px'}
                            overflow="hidden"
                            position="relative"
                        >
                            {/* Placeholder for the woman image */}
                            <Box
                                w="750px"
                                h="650px"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                position="relative"
                                _before={{
                                    position: 'absolute',
                                    display: "block",
                                    left: 0,
                                    top: 0,
                                    background: "rgba(0, 0, 0, 0.4)",
                                    content: "''",
                                    zIndex: "4",
                                    width: "100%",
                                    height: "100%"
                                }}
                            >
                                <Image
                                    height={'100%'}
                                    objectFit={'cover'}
                                    src='https://transport.52gov.ru/assets/cache_image/assets/content/h6a3a3afd381c47eebd8af349a2d0a18fe_1920x0_8e5.jpg' />
                            </Box>
                        </Box>
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
}