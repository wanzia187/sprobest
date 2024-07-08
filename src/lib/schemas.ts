import { z } from 'zod';

export const bookingSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
    company: z.string().optional(),
    email: z.string().email({ message: "Invalid email address" }),
    phone: z.string().min(10, { message: "Phone number must be at least 10 characters long" }),
    whatsapp: z.string().min(10, { message: "WhatsApp number must be at least 10 characters long" }).optional(),
    eventType: z.enum(["service1", "service2", "service3"], {
        errorMap: () => ({ message: "Please select a valid event type" })
    }),
    startDate: z.coerce.date({ invalid_type_error: "Invalid start date" }),
    endDate: z.coerce.date({ invalid_type_error: "Invalid end date" }).optional(),
    location: z.string().min(2, { message: "Location must be at least 2 characters long" }),
});

// If you have other schemas (e.g., for the contact form), you can add them here
export const contactSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
    email: z.string().email({ message: "Invalid email address" }),
    subject: z.string().min(2, { message: "Subject must be at least 2 characters long" }),
    message: z.string().min(2, { message: "Message must be at least 2 characters long" }),
});

// You can add more schemas as needed